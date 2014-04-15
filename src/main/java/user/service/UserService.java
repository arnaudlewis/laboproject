package user.service;

import user.User;
import user.dataAccess.DaoUser;
import user.dto.CreateUserRequestDTO;
import user.dto.CreateUserResponseDTO;
import user.dto.LoginRequestDTO;
import user.dto.UpdateProfileRequestDTO;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/user")
public class UserService {

    @POST
    @Path("/signin")
    @Consumes(MediaType.APPLICATION_JSON)
    public CreateUserResponseDTO signin(CreateUserRequestDTO request) {
        boolean usernameExist;
        boolean emailExist;
        CreateUserResponseDTO reponse = new CreateUserResponseDTO();

        usernameExist = DaoUser.getInstance().checkDuplicateUsername(request.getUser().getUsername());
        emailExist = DaoUser.getInstance().checkDuplicateEmail(request.getUser().getEmail());

        if (!usernameExist && !emailExist) {
            User newUser = request.getUser();
            newUser.setDriverPreferences(request.getPreference());
            reponse.setId_user(DaoUser.getInstance().insert(newUser));
        } else {
            reponse.setId_user(-1);
        }
        reponse.setUsernameExist(usernameExist);
        reponse.setEmailExist(emailExist);

        return reponse;

    }

    @Path("/connect")
    @Produces(MediaType.APPLICATION_JSON)
    @POST
    public User authentication(LoginRequestDTO request) {
        return DaoUser.getInstance().authentication(request.getUsername(), request.getPassword());
    }

    @POST
    @Path("/profile")
    public void createProfile(UpdateProfileRequestDTO request) {
        DaoUser.getInstance().update(request.getUser());
    }
}




