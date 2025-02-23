package com.example.mapper;

import com.example.dto.PaymentDTO;
import com.example.dto.StudentDTO;
import com.example.dto.UtlisateurDTO;
import com.example.model.Payment;
import com.example.model.Student;
import com.example.model.Utilisateur;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class MapperImpl {
    public Payment fromPaymentDTO(PaymentDTO paymentDTO) {
        Payment payment = new Payment();
        BeanUtils.copyProperties(paymentDTO, payment);
        payment.setStudent(fromStudentDTO(paymentDTO.getStudentDTO()));
        return payment;
    }

    public PaymentDTO fromPayment(Payment payment) {
        PaymentDTO paymentDTO = new PaymentDTO();
        BeanUtils.copyProperties(payment, paymentDTO);
        paymentDTO.setStudentDTO(fromStudent(payment.getStudent()));
        return paymentDTO;
    }

    public Student fromStudentDTO(StudentDTO studentDTO) {
        Student student = new Student();
        BeanUtils.copyProperties(studentDTO, student);
        return student;
    }

    public StudentDTO fromStudent(Student student) {
        StudentDTO studentDTO = new StudentDTO();
        BeanUtils.copyProperties(student, studentDTO);
        return studentDTO;
    }
    public Utilisateur fromUtilisaturDTO(UtlisateurDTO utlisateurDTO){
         Utilisateur utlisateur = new Utilisateur();
         BeanUtils.copyProperties(utlisateur,utlisateurDTO);
         return  utlisateur;
    }
    public  UtlisateurDTO fromutlisateur(Utilisateur utlisateur){
        UtlisateurDTO utlisateurDTO = new UtlisateurDTO();
        BeanUtils.copyProperties(utlisateurDTO, utlisateur);
        return utlisateurDTO;
    }
}
