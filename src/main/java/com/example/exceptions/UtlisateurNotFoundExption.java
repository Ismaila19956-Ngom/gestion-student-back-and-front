package com.example.exceptions;

public class UtlisateurNotFoundExption extends  RuntimeException{
    public UtlisateurNotFoundExption(String message) {
        super(message);
    }
}
