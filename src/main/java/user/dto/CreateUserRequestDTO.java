package user.dto;

import preference.Preference;
import user.User;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

/**
 * Cette classe (de type assembleur) s'occupe de récupérer les paramètres issues du formulaire
 * d'inscription. A savoir, le formulaire est créé en utilisant le framework AngularJS
 * AngularJS transmets un fichier JSON à cette classe, d'où la
 * ligne @Consumes(MediaType.APPLICATION_JSON)
 * <p/>
 * Les objets de cette classe seront utilisé pour notre web service UserService.
 * <p/>
 * Remarque: on aurait pu mettre le @Consumes(MediaType.APPLICATION_JSON dans notre web service
 * <p/>
 * Created by oliver on 01/03/14.
 */

@XmlType(name = "CreateUserRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class CreateUserRequestDTO {

    @XmlElement(name = "user")
    private User user;
    @XmlElement(name = "preference")
    private Preference preference;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public CreateUserRequestDTO() {

    }

    public Preference getPreference() {
        return preference;
    }

    public void setPreference(Preference preference) {
        this.preference = preference;
    }
}
