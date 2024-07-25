import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
import { readFile } from 'node:fs/promises';

const quotesFile = "quotes.json";

// try to read a file ffs

    

export async function getQuotes() {
    
async function sopranosRead(fileNamePeramiter) {
        try {
            const fileData = await sopranosRead(quotesFile, 'utf8');
            console.log(fileData);
        } catch (error) {
            console.error('Error reading file:', error);
        }
    }

}

// export async function addQuote(quoteText) {

// }

// export async function getRandomQuote() {

// }

// export async function editQuote(id, quoteText) {

// }

// export async function deleteQuote(id) {

// }
