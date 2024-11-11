package com.example.service;

import com.example.dto.UtlisateurDTO;
import com.example.mapper.MapperImpl;
import com.example.model.Utilisateur;
import com.example.repository.UtilisateurRepository;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {
    private  final MapperImpl mapper;
    private  final UtilisateurRepository utilisateurRepository;

    public UtilisateurServiceImpl(MapperImpl mapper, UtilisateurRepository utilisateurRepository) {
        this.mapper = mapper;
        this.utilisateurRepository = utilisateurRepository;
    }

    @Override
    public UtlisateurDTO createUtilisateurDTO(UtlisateurDTO utlisateurDTO) {
        Utilisateur savaUtilisateur = utilisateurRepository.save(mapper.fromUtilisaturDTO(utlisateurDTO));
        return mapper.fromutlisateur(savaUtilisateur);
    }
}
