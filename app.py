from flask import render_template, Flask, request, jsonify
import subprocess

app = Flask(__name__)

OLLAMA_PATH = r"C:\Users\veeje\AppData\Local\Programs\Ollama\ollama.exe"  # Adjust for your system
def call_ollama(prompt):
    command = [OLLAMA_PATH, 'run', 'llama3']  # Replace with your model

    try:
        # Open a pipe to send the prompt and read the reply
        process = subprocess.Popen(
            command,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )

        # Send the user prompt to ollama and close stdin
        stdout, stderr = process.communicate(prompt)

        if process.returncode == 0:
            return stdout.strip()
        else:
            return f"Error: {stderr.strip()}"

    except Exception as e:
        return f"Exception: {str(e)}"




@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '')
    reply = call_ollama(user_message)
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
