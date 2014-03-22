package user.dto;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlType;

/**
 * Cette classe (de type assembleur) s'occupe de récupérer le id_user de la requête insert du userDAO.
 * A noter: le @Produces qui créera du contenu JSON et l'enverra à angularjs pour alimenter la variable
 * data qui est en parametre du service().success() dans service.js
 * (attention ne pas cofondre avec la classe CreateUserRequestDTO qui consommait (@Consumes) du JSON.
 *
 * Les objets de cette classe seront utilisé pour notre web service UserService.
 *
 * Remarque: on aurait pu mettre le @Produces(MediaType.APPLICATION_JSON dans notre web service)
 *
 */

@XmlType(name="CreateUserResponseDTO")
@Produces(MediaType.APPLICATION_JSON)
public class CreateUserResponseDTO {

    private int id_user;

    public CreateUserResponseDTO(){
       }

    public int getId_user() {
        return id_user;
    }
    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

}
