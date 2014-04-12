import user.User;
import user.dataAccess.DaoUser;

public class Main {

    public static void main(String[] args) {
        User user = DaoUser.getInstance().find(4);

        user.setUsername("ESSAI");
        DaoUser.getInstance().update(user);
    }

}
