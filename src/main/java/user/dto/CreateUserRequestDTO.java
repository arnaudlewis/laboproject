package user.dto;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.Date;

/**
 *
 * Cette classe (de type assembleur) s'occupe de récupérer les paramètres issues du formulaire
 * d'inscription. A savoir, le formulaire est créé en utilisant le framework AngularJS
 * AngularJS transmets un fichier JSON à cette classe, d'où la
 * ligne @Consumes(MediaType.APPLICATION_JSON)
 *
 * Les objets de cette classe seront utilisé pour notre web service UserService.
 *
 * Remarque: on aurait pu mettre le @Consumes(MediaType.APPLICATION_JSON dans notre web service
 *
 * Created by oliver on 01/03/14.
 */

@XmlType(name = "CreateUserRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class CreateUserRequestDTO {

    @XmlElement(name="creationDate")
    private Date creationDate;
    @XmlElement(name="firstname")
    private String firstname;
    @XmlElement(name="lastname")
    private String lastname;
    @XmlElement(name="email")
    private String email;
    @XmlElement(name="birthday")
    @Temporal(TemporalType.DATE)
    private Date birthday;
    @XmlElement(name="username")
    private String username;
    @XmlElement(name="password")
    private String password;


    public CreateUserRequestDTO(){
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

    public Date getBirthday() {
        return birthday;
    }
    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }
}
