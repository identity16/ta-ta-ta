#!/bin/bash

if [[ $1 == *".ts" || $1 == *".tsx" ]]; then
  eslint $1
  tsc $1 --noEmit
fi
