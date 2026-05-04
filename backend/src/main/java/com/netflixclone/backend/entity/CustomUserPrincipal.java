package com.netflixclone.backend.entity;

public class CustomUserPrincipal  {
    private Integer id;
    private String email;

    public CustomUserPrincipal (Integer id, String email) {
        this.id = id;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }
}
