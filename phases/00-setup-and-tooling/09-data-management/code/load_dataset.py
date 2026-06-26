from datasets import load_dataset  # type: ignore

# dataset = load_dataset("stanfordnlp/imdb")
dataset = load_dataset("imdb")
print(dataset)
print(dataset["train"][0])
