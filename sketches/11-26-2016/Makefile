IMAGE_URL= http://99percentinvisible.org/app/uploads/2015/03/photo-1421284621639-884f4129b61d.jpeg
P5_JS_URL= https://github.com/processing/p5.js/releases/download/0.5.4/p5.js
P5_FILENAME= p5.js
IMAGE_FILENAME= out.jpg

clean:
	rm -f $(IMAGE_FILENAME) $(P5_FILENAME);
	rm - f *.gif;
image:
	curl $(IMAGE_URL) > $(IMAGE_FILENAME);
p5:
	curl -L $(P5_JS_URL) > $(P5_FILENAME);
glitch: image p5
	python -m SimpleHTTPServer
	phantomjs phantom.js

out.gif: glitch
	gifsicle --loop --colors 256 *.gif --delay 0 > out.gif

all: out.gif
