package preference.dataAccess;

import common.dataAccess.Dao;
import preference.Preference;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by arnaud on 14/04/2014.
 */
public class DaoPreference extends Dao<Preference> {

    private static final DaoPreference instance = new DaoPreference();

    private DaoPreference() {

    }

    public static DaoPreference getInstance() {
        return instance;
    }

    @Override
    public int insert(Preference obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
            int id = obj.getId_preference();
            t.commit();
            return id;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public void update(Preference obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.merge(obj);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public void delete(Preference obj) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.persist(obj);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public Preference find(int id) {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();
        Preference findedPreference;

        try {
            t.begin();
            findedPreference = em.find(Preference.class, id);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
            findedPreference = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }

        return findedPreference;
    }

    @Override
    public List<Preference> findAll() {
        EntityManager em = getEntityManagerFactory().createEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Preference> resultList;
        try {
            t.begin();
            String sql = "SELECT e FROM Preference e";
            TypedQuery<Preference> requete = em.createQuery(sql, Preference.class);
            resultList = requete.getResultList();
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
            resultList = null;
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return resultList;
    }
}
