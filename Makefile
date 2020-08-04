SDGaokaoApplicationForm.min.js: SDGaokaoApplicationForm.js
	minifyjs -m -i SDGaokaoApplicationForm.js -o SDGaokaoApplicationForm.min.js

url: SDGaokaoApplicationForm.min.js
	./utils/encodeuri.py < SDGaokaoApplicationForm.min.js > url

.PHONY: clean
clean:
	-rm -f SDGaokaoApplicationForm.min.js url
