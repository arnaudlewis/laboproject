package user;

import preference.Preference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by arnaud on 12/02/2014.
 */

@Entity
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_user;
    private String firstname;
    private String lastname;
    private String email;
    private String username;
    private String password;
    @Temporal(TemporalType.DATE)
    private Date birthdate;
    @Temporal(TemporalType.DATE)
    private Date creationDate;
    @ManyToOne(cascade = CascadeType.ALL)
    private Preference driverPreferences;
    @ManyToOne(cascade = CascadeType.ALL)
    private Preference travellerPreferences;

    private boolean sex; // TRUE female, FALSE male
    private String hobby;
    private String music;
    private String moreInfo;

    public User() {
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    //GETTERs et SETTERs relatifs au profil


    public boolean isSex() {
        return sex;
    }

    public void setSex(boolean sex) {
        this.sex = sex;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getMusic() {
        return music;
    }

    public void setMusic(String music) {
        this.music = music;
    }

    public String getMoreInfo() {
        return moreInfo;
    }

    public void setMoreInfo(String moreInfo) {
        this.moreInfo = moreInfo;
    }

    public Preference getDriverPreferences() {
        return driverPreferences;
    }

    public void setDriverPreferences(Preference driverPreferences) {
        this.driverPreferences = driverPreferences;
    }

    public Preference getTravellerPreferences() {
        return travellerPreferences;
    }

    public void setTravellerPreferences(Preference travellerPreferences) {
        this.travellerPreferences = travellerPreferences;
    }
}
