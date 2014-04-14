package travel.dto;

import city.City;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.Date;

/**
 * Created by oliver on 05/04/14.
 */
@XmlType(name = "ProposeTravelRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class ProposeTravelRequestDTO {

    @XmlElement(name = "id_user")
    private int id_user;
    @XmlElement(name = "departure")
    private City departure;
    @XmlElement(name = "arrival")
    private City arrival;
    @XmlElement(name = "travelDate")
    private Date travelDate;

    public ProposeTravelRequestDTO() {
    }


    public City getDeparture() {
        return departure;
    }

    public void setDeparture(City departure) {
        this.departure = departure;
    }

    public City getArrival() {
        return arrival;
    }
    public void setArrival(City arrival) {
        this.arrival = arrival;
    }

    public Date getTravelDate() {
        return travelDate;
    }
    public void setTravelDate(Date travelDate) {
        this.travelDate = travelDate;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }
}
