package com.netflixclone.backend.dto;

public class CreditDTO {

    private Integer id;
    private String characterName;
    private String creditType;
    private String department;
    private String character;
    private String job;

    public CreditDTO(
            Integer id,
            String characterName,
            String creditType,
            String department,
            String character,
            String job
    ) {
        this.id = id;
        this.characterName = characterName;
        this.creditType = creditType;
        this.department = department;
        this.character = character;
        this.job = job;
    }

    // getters
    public Integer getId() {
        return id;
    }

    public String getcharacterName() {
        return characterName;
    }

    public String getCreditType() {
        return creditType;
    }

    public String getDepartment() {
        return department;
    }

    public String getCharacter() {
        return character;
    }

    public String getJob() {
        return job;
    }

    // setters
    public void setId(Integer id) {
        this.id = id;
    }

    public void setcharacterName(String characterName) {
        this.characterName = characterName;
    }

    public void setCreditType(String creditType) {
        this.creditType = creditType;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public void setJob(String job) {
        this.job = job;
    }
}