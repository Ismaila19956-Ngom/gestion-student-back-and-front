package com.example.repository;

import com.example.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepository extends  JpaRepository<Utilisateur , Long> {
}
