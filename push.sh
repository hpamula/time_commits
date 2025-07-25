#!/bin/bash

set -e
if [ -z "$1" ]; then
  echo "Usage: $0 <commit_message>"
  exit 1
fi
git rm -r --cached --ignore-unmatch .
git add .
git commit -m "$1"
git push
