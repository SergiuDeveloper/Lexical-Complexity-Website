from gensim.models.fasttext import FastText
from joblib import load
import sys


print(sys.argv[1])

fasttext_mdl = FastText.load('models/FastText/model')
hgbr_mdl = load('models/HistGradientBoostingRegressor/model')

input_word = sys.argv[1].lower()
input_word_ngrams = fasttext_mdl.wv[input_word]
predicted_complexity = hgbr_mdl.predict([input_word_ngrams])[0]
print(predicted_complexity)