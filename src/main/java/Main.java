import preference.Preference;
import preference.dataAccess.DaoPreference;
import user.User;
import user.dataAccess.DaoUser;

public class Main {

    public static void main(String[] args) {
        User user = new User();

        user.setUsername("ESSAI");

        Preference pref = new Preference();
        pref.setAnimal(1);
        pref.setSmoke(0);
        user.setDriverPreferences(pref);
        DaoPreference.getInstance().insert(pref);
        DaoUser.getInstance().insert(user);
    }

}
