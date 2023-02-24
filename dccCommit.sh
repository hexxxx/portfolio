#!/bin/bash
# get commit message from user and push to origin main

read -p 'Commit message: ' commit_message
git add -A
git commit -m "$commit_message"
git push origin main
