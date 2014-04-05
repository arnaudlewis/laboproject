package travel.dto;

import city.City;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.Date;

/**
 * Created by oliver on 04/04/14.
 */
@XmlType(name = "SearchTravelRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class SearchTravelRequestDTO {

    @XmlElement(name = "arrival")
    private City arrival;
    @XmlElement(name = "departure")
    private City departure;
    @XmlElement(name = "travelDate")
    @Temporal(TemporalType.DATE)
    private Date travelDate;

    public SearchTravelRequestDTO() {
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

}
