package journey.dto;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlType;

/**
 * Ce DTO couplé avec le Web Service acceccible à l'url /journey/insert
 * sert UNIQUEMENT à tester la bonne persistence dans la bdd
 * <p/>
 * Created by oliver on 10/03/14.
 */

@XmlType(name = "EssaiResponseInsertDTO")
@Produces(MediaType.APPLICATION_JSON)
public class EssaiResponseInsertDTO {

    private int id_journey;

    public EssaiResponseInsertDTO() {

    }

    public int getId_journey() {
        return id_journey;
    }

    public void setId_journey(int id_journey) {
        this.id_journey = id_journey;
    }
}
