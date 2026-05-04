package com.netflixclone.backend.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title")
    private String title;
    @Column(name = "description", length = 2000)
    private String description; 
    @Column(name = "release_date")
    private Date releaseDate;
    @Column(name = "rater_count")
    private Integer raterCount;
    @Column(name = "rating")
    private Double rating;
    @Column(name = "poster_url")
    private String posterUrl;
    @Column(name = "price")
    private Double price;
    @Column(name = "duration")
    private Integer duration;

    @ManyToMany
    @JoinTable(
        name = "movie_genre",
        joinColumns = @JoinColumn(name = "movie_id"),
        inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private List<Genre> genres;

    @OneToMany(mappedBy = "movie")
    private List<Credit> credits;

    @OneToMany(mappedBy = "movie")
    private List<TransactionDetail> transactionDetails;

    @OneToMany(mappedBy = "movie")
    private List<Media> medias;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Date getReleaseDate() {
        return releaseDate;
    }
    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }
    public Integer getRaterCount() {
        return raterCount;
    }
    public void setRaterCount(Integer raterCount) {
        this.raterCount = raterCount;
    }
    public Double getAverageRating() {
        return rating;
    }
    public void setAverageRating(Double rating) {
        this.rating = rating;
    }
    public String getPosterUrl() {
        return posterUrl;
    }
    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public Integer getDuration() {
        return duration;
    }
    public void setDuration(Integer duration) {
        this.duration = duration;
    }
}
