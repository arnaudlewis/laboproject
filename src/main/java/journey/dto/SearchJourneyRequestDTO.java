package journey.dto;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.Date;

/**
 * Created by oliver on 09/03/14.
 */
@XmlType(name = "SearchJourneyRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class SearchJourneyRequestDTO {

    @XmlElement(name = "departure")
    private String departure;
    @XmlElement(name = "arrival")
    private String arrival;
    @XmlElement(name = "journey_date")
    private Date journey_date;
    private boolean display = false;

    public SearchJourneyRequestDTO() {
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    public Date getJourney_date() {
        return journey_date;
    }

    public void setJourney_date(Date journey_date) {
        this.journey_date = journey_date;
    }

    public boolean isDisplay() {
        return display;
    }

    public void setDisplay(boolean display) {
        this.display = display;
    }

}
