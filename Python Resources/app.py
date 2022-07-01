import tensorflowjs as tfjs
import tensorflow as tf

cnn = tf.keras.models.load_model("HandGest3.h5")

tfjs.converters.save_keras_model(cnn, "./")