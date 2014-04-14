package user.service;

import user.User;
import user.dataAccess.DaoUser;
import user.dto.*;

import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("/user")
public class UserService {

    @POST
    @Path("/signin")
    public CreateUserResponseDTO signin(CreateUserRequestDTO request) {
        boolean usernameExist = false;
        boolean emailExist = false;
        CreateUserResponseDTO reponse = new CreateUserResponseDTO();
        User createdUser = createUserFromSignUpData(request);
        // pour contrôler les doublons
        usernameExist = DaoUser.getInstance().checkDuplicateUsername(request.getUsername());
        emailExist = DaoUser.getInstance().checkDuplicateEmail(request.getEmail());
        //pour insérer un user je dois vérifier que l'email et le username n'exite pas
        if (!usernameExist && !emailExist) {
            reponse.setId_user(DaoUser.getInstance().insert(createdUser));
            reponse.setUsernameExist(true);
            reponse.setEmailExist(true);
        } else {
            reponse.setId_user(-1);
            reponse.setUsernameExist(usernameExist);
            reponse.setEmailExist(emailExist);
            System.out.println("UTILISATEUR deja EXISTANT");
        }
        return reponse;

    }


    private User createUserFromSignUpData(CreateUserRequestDTO signUpData) {
        User user = new User();
        user.setCreationDate(signUpData.getCreationDate());
        user.setFirstname(signUpData.getFirstname());
        user.setLastname(signUpData.getLastname());
        user.setEmail(signUpData.getEmail());
        user.setBirthdate(signUpData.getBirthday());
        user.setUsername(signUpData.getUsername());
        user.setPassword(signUpData.getPassword());
        user.setSex(signUpData.isSex());
        return user;
    }

    @Path("/connect")
    @POST
    public LoginResponseDTO authentication(LoginRequestDTO request) {

        LoginResponseDTO response = new LoginResponseDTO();

        User loggedUser = DaoUser.getInstance().authentication(request.getUsername(), request.getPassword());
        if (loggedUser != null) {
            setUserToResponse(response, loggedUser);
        }
        return response;
    }

    private void setUserToResponse(LoginResponseDTO response, User loggedUser) {
        response.setUsername(loggedUser.getUsername());
        response.setFirstname(loggedUser.getFirstname());
        response.setLastname(loggedUser.getLastname());
        response.setBirthdate(loggedUser.getBirthdate());
        response.setCreationDate(loggedUser.getCreationDate());
        response.setEmail(loggedUser.getEmail());
        response.setId_user(loggedUser.getId_user());
        response.setSex(loggedUser.isSex());
        response.setMusic(loggedUser.getMusic());
        response.setAnimal(loggedUser.isAnimal());
        response.setMoreInfo(loggedUser.getMoreInfo());
        response.setHobby(loggedUser.getHobby());
        response.setSmoke(loggedUser.isSmoke());
    }

    @POST
    @Path("/profile")
    public void createProfile(CreateProfileRequestDTO requete) {

        //CreateProfileResponseDTO reponseProfile = new CreateProfileResponseDTO();
        User profile = DaoUser.getInstance().find(requete.getId_user());

        profile.setHobby(requete.getHobby());
        profile.setMusic(requete.getMusic());
        profile.setAnimal(requete.isAnimal());
        profile.setSmoke(requete.isSmoke());
        profile.setMoreInfo(requete.getMoreInfo());

        DaoUser.getInstance().update(profile);

    }
}




