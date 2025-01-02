# Hiding Node.js Environment Varaibles

A basic vanilla Node.js script to load variables from an .env file. Run the script using a regular Node.js starting command `node app.js` and add a flag to include environment variabl;es `--end-file=.env`.

1. Create a file called `.env` and place it in your project folder.

2. Put your actual database credentials and API keys in your `.env``file:
    
    ```php
    DB_HOST=<DB_HOST>
    DB_DATABASE=<DB_DATABASE>
    DB_USERNAME=<DB_USERNAME>
    DB_PASSWORD=<DB_PASSWORD>
    
    API_SECRET=real_api_key
    ```

3. Create a second copy of your `.env` file and name it `.env.sample`. Use this file to provide instructions to the next programmer using your project code:
    
    ```php
    DB_HOST=localhost
    DB_DATABASE=database
    DB_USERNAME=username
    DB_PASSWORD=password
    
    API_SECRET=api_key
    ```

4. Make sure your GitHub repo does not include the file named `.env`. In your `.gitignore` file add:
    
    ```
    .env
    ```

> [!Note]
> I have excluded this step in this repo so you can view both the `.env` and `.env.sample` files. 

5. Start the Node.js app with the `.env` file:

    ```
    node --end-file=.env app.js
    ```

---

## Project Stack

This project uses [Node.js](https://nodejs.org/).

<img src="https://console.codeadam.ca/api/image/nodejs" width="60"> 

---

## Repo Resources

- [Node.js](https://nodejs.org/)
- [propcess.env](https://nodejs.org/api/process.html#processenv)

<a href="https://codeadam.ca">
<img src="https://codeadam.ca/images/code-block.png" width="100">
</a>
