package travel;


import user.User;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
/**
 * Created by eric on 15/01/14.
 * Cette table doit recupere les informations de la table ville tel que les cordonnés de géolocalisation,
 * mais aussi faire une comparaison de entre les valeurs de la class ville
 */
public class Travel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_travel;

    //  private City departure;
    //  private City arrival;
    //  Il faudra créer un objet avec les coordonnées du lieu pour référencer depart arrivée point d'arret etc
    private int duration;
    private double price;

    public Travel() {
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
}
