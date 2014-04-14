package user.dto;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.Date;


@XmlType(name = "LoginResponseDTO")
@Produces(MediaType.APPLICATION_JSON)
public class LoginResponseDTO {

    @XmlElement(name = "id_user")
    private int id_user;
    @XmlElement(name = "firstname")
    private String firstname;
    @XmlElement(name = "lastname")
    private String lastname;
    @XmlElement(name = "email")
    private String email;
    @XmlElement(name = "username")
    private String username;
    @XmlElement(name = "birthdate")
    @Temporal(TemporalType.DATE)
    private Date birthdate;
    @XmlElement(name = "creationDate")
    @Temporal(TemporalType.DATE)
    private Date creationDate;
    @XmlElement(name = "music")
    private String music;
    @XmlElement(name = "sex")
    private boolean sex; // TRUE female, FALSE male
    @XmlElement(name = "hobby")
    private String hobby;
    @XmlElement(name = "animal")
    private boolean animal;
    @XmlElement(name = "smoke")
    private boolean smoke;
    @XmlElement(name = "moreInfo")
    private String moreInfo;


    public LoginResponseDTO() {
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

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public String getMusic() {
        return music;
    }

    public void setMusic(String music) {
        this.music = music;
    }

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

    public boolean isAnimal() {
        return animal;
    }

    public void setAnimal(boolean animal) {
        this.animal = animal;
    }

    public boolean isSmoke() {
        return smoke;
    }

    public void setSmoke(boolean smoke) {
        this.smoke = smoke;
    }

    public String getMoreInfo() {
        return moreInfo;
    }

    public void setMoreInfo(String moreInfo) {
        this.moreInfo = moreInfo;
    }

}
