package travel.dto;

import preference.Preference;
import travel.Travel;
import user.User;

import javax.ws.rs.Consumes;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = "ProposeTravelRequestDTO")
@Consumes(MediaType.APPLICATION_JSON)
public class ProposeTravelRequestDTO {


    @XmlElement(name = "travel")
    private Travel travel;
    @XmlElement(name = "preference")
    private Preference preference;
    @XmlElement(name = "user")
    private User user;

    public ProposeTravelRequestDTO() {
    }

    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travel) {
        this.travel = travel;
    }

    public Preference getPreference() {
        return preference;
    }

    public void setPreference(Preference preference) {
        this.preference = preference;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
