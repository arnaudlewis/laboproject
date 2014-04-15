package user.dto;

import user.User;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

/**
 * Created by oliver on 02/04/14.
 */
@XmlType(name = "UpdateProfileRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class UpdateProfileRequestDTO {

    // données relatives au profil
    @XmlElement(name = "user")
    private User user;

    public UpdateProfileRequestDTO() {
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}


