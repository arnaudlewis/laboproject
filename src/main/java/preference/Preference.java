package preference;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Preference implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_preference;

    @Column(name = "animal", nullable = true)
    private int animal;
    @Column(name = "smoke", nullable = true)
    private int smoke;


    public Preference() {
    }

    public int getAnimal() {
        return animal;
    }

    public int getSmoke() {
        return smoke;
    }

    public void setAnimal(int animal) {
        this.animal = animal;
    }

    public void setSmoke(int smoke) {
        this.smoke = smoke;
    }

    public int getId_preference() {
        return id_preference;
    }

    public void setId_preference(int id_preference) {
        this.id_preference = id_preference;
    }
}
