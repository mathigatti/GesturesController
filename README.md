# Gestures Controller

This program relies on [fingerpose](https://github.com/mathigatti/fingerpose) developed by [Andreas Schallwig](https://github.com/andypotato) using tensorflow-js [handpose model](https://github.com/tensorflow/tfjs-models/tree/master/handpose).


## Requirements

- Python 3
- Some python packages (To install them try running `pip install -r requeriments.txt`)

## Running it

```
flask run --host=0.0.0.0 --port=8080
```

Once it's running you should be able to access [http://localhost:8080/](http://localhost:8080/) and see the webcam running and identifying your hand.
