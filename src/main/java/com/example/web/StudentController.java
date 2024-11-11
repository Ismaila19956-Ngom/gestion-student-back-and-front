package com.example.web;

import com.example.dto.StudentDTO;
import com.example.exceptions.StudentNotFoundException;
import com.example.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/studentsList")
    public List<StudentDTO> findAllStudent() {
        return studentService.findAllStudents();
    }

    @GetMapping("/findStudent/{id}")
    public StudentDTO findStudentById(@PathVariable String id) throws StudentNotFoundException {
        return studentService.findStudentById(id);
    }


    @GetMapping("/{programId}/program")
    public List<StudentDTO> findStudentsByProgramId(@PathVariable String programId) {
        return studentService.findStudentByProgramId(programId);
    }

    @PostMapping("/createStudent")
    public StudentDTO createStudent(@RequestBody StudentDTO studentDTO) {
        studentDTO.setId(UUID.randomUUID().toString());
        return studentService.createStudent(studentDTO);
    }

    @PutMapping("/{id}")
    public StudentDTO createStudent(@PathVariable String id, @RequestBody StudentDTO studentDTO) {
        studentDTO.setId(id);
        return studentService.updateStudent(studentDTO);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteStudent(@PathVariable String id) {
        studentService.deleteStudent(id);
    }
}
