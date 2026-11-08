try:
    # Open the text file in read mode
    with open("sample.txt", "r") as file:

        # Read the contents of the file
        text = file.read()

        # Split the text into words
        words = text.split()

        # Count the total number of words
        word_count = len(words)

        # Display the result
        print("===== WORD COUNTER =====")
        print("Total Words:", word_count)

except FileNotFoundError:
    print("Error: File not found!")

except Exception as e:
    print("An error occurred:", e)