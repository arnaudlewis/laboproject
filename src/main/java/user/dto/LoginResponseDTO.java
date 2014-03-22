package user.dto;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.Date;


@XmlType(name="LoginResponseDTO")
@Produces(MediaType.APPLICATION_JSON)
public class LoginResponseDTO {

    @XmlElement(name = "firstname")
    private String firstname;
    @XmlElement(name = "lastname")
    private String lastname;
    @XmlElement(name = "email")
    private String email;
    @XmlElement(name = "username")
    private String username;
    @XmlElement(name = "birthdate")
    @Temporal( TemporalType.DATE )
    private Date birthdate;
    @XmlElement(name = "creationDate")
    @Temporal( TemporalType.DATE )
    private Date creationDate;

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
}
