#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import urllib.parse
import sys

src = sys.stdin.read()
print("javascript:%s" % (urllib.parse.quote(src)) , end="")