package travel;


import city.City;
import preference.Preference;
import user.User;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
public class Travel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_travel;
    @OneToOne(fetch = FetchType.EAGER)
    private City departure;
    @OneToOne(fetch = FetchType.EAGER)
    private City arrival;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<City> stopover;
    private int duration;
    private double price;
    @Temporal(TemporalType.DATE)
    private Date travelDate;
    @ManyToOne
    private User driver;
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Preference preferences;
    private int nbPassenger;
    private Time travelTime;

    public Travel() {

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

    public List<City> getStopover() {
        return stopover;
    }

    public void setStopover(List<City> stopover) {
        this.stopover = stopover;
    }


    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getId_travel() {
        return id_travel;
    }

    public void setId_travel(int id_travel) {
        this.id_travel = id_travel;
    }

    public Date getTravelDate() {
        return travelDate;
    }

    public void setTravelDate(Date travelDate) {
        this.travelDate = travelDate;
    }

    public User getDriver() {
        return driver;
    }

    public void setDriver(User driver) {
        this.driver = driver;
    }

    public Preference getPreferences() {
        return preferences;
    }

    public void setPreferences(Preference preferences) {
        this.preferences = preferences;
    }

    public int getNbPassenger() {
        return nbPassenger;
    }

    public void setNbPassenger(int nbPassenger) {
        this.nbPassenger = nbPassenger;
    }

    public Time getTravelTime() {
        return travelTime;
    }

    public void setTravelTime(Time travelTime) {
        this.travelTime = travelTime;
    }
}
