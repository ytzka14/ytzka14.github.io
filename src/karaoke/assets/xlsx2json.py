import pandas as pd
import os

def xlsx_to_json(input_file, output_file):
    try:
        # Read the XLSX file into a pandas DataFrame
        df = pd.read_excel(input_file)

        # Convert the DataFrame to a JSON object
        json_data = df.to_json(orient='records', indent=4)

        # Write the JSON data to the output file
        with open(output_file, 'w', encoding="UTF-8") as json_file:
            json_file.write(json_data)

        print(f"Conversion successful. JSON file saved as {output_file}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = "~/ytzka14.github.io/karaoke-vite/src/assets/karaoke.xlsx"  # Replace with the path to your input XLSX file
    output_file = "~/ytzka14.github.io/karaoke-vite/src/assets/karaoke.json"  # Replace with the desired output JSON file path

    input_file = os.path.expanduser(input_file)
    output_file = os.path.expanduser(output_file)
    xlsx_to_json(input_file, output_file)
    
    input_file = "~/ytzka14.github.io/karaoke-vite/src/assets/quotes.xlsx"
    output_file = "~/ytzka14.github.io/karaoke-vite/src/assets/quotes.json"
    
    input_file = os.path.expanduser(input_file)
    output_file = os.path.expanduser(output_file)
    xlsx_to_json(input_file, output_file)
