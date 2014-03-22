package journey;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by oliver on 09/03/14.
 */
@Entity
public class Journey implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_journey;
    private String departure;
    private String arrival;
    @Temporal(TemporalType.DATE)
    private Date journey_date;
    private boolean display;

    public Journey() {

    }

    public int getId_journey() {
        return id_journey;
    }

    public void setId_journey(int id) {
        this.id_journey = id_journey;
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

    public void setJourney_date(Date travel_date) {
        this.journey_date = travel_date;
    }

    public boolean isDisplay() {
        return display;
    }

    public void setDisplay(boolean display) {
        this.display = display;
    }
}
