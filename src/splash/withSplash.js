import React, { Component } from "react";
import { getViewportSize } from "../_common/util";
import "./Splash.scss";

function LoadingMessage(width, height) {
  return (
    <section
      className="Splash"
      style={{
        width,
        height,
      }}
    >
      <img src="/img/logo.png" alt="Ta-Ta-Ta Logo" />
      <p>타타타</p>
    </section>
  );
}

function withSplash(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      const { width, height } = getViewportSize();

      this.state = {
        loading: true,
        width,
        height,
      };
    }
    resize() {
      const { width, height } = getViewportSize();

      this.setState({ ...this.state, width, height });
    }

    async componentDidMount() {
      try {
        const bindResize = this.resize.bind(this);

        this.resize();
        window.addEventListener("resize", bindResize);

        setTimeout(() => {
          this.setState({
            loading: false,
          });
          window.removeEventListener("resize", bindResize);
        }, 2500);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading)
        return LoadingMessage(this.state.width, this.state.height);

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplash;
