package user.dto;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

/**
 * Created by arnaud on 08/03/2014.
 */

@XmlType(name="LoginRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class LoginRequestDTO {

    @XmlElement(name = "username")
    private String username;
    @XmlElement(name= "password")
    private String password;

    public LoginRequestDTO() {
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
}
