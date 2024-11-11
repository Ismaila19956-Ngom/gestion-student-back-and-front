package com.example.web;

import com.example.dto.UtlisateurDTO;
import com.example.service.UtilisateurService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UtilisateurController {
    private final UtilisateurService utilisateurService;

    public UtilisateurController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "/createUtilisateur")
    public UtlisateurDTO createUtilisateur(@PathVariable UtlisateurDTO utlisateurDTO){
        return utilisateurService.createUtilisateurDTO(utlisateurDTO);


    }
}
