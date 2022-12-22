using UnityEngine;

public class AutoDestructor : MonoBehaviour
{
    enum TypeDestroy
    {
        Disable,
        PutToPool, 
        Destroy
    }

    [SerializeField] private float timeDestroy = 1.5f;
    [SerializeField] private bool isPutToPool = true;
    [SerializeField] private TypeDestroy typeDestroy;

    private void OnEnable()
    {
        Invoke(nameof(AutoDestroy), timeDestroy);
    }

    private void AutoDestroy()
    {
        if (isPutToPool)
        {
            //SimplePool.Despawn(gameObject);
            Destroy(gameObject);
        }
        else
        {
            switch (typeDestroy)
            {
                case TypeDestroy.Disable:
                    gameObject.SetActive(false);
                    break;
                case TypeDestroy.PutToPool:
                    gameObject.GetComponent<ParticleSystem>().Stop();
                    //SimplePool.Despawn(gameObject);
                    Destroy(gameObject);
                    break;
                case TypeDestroy.Destroy:
                default:
                    Destroy(gameObject);
                    break;
            }
            
        }
    }

    private void OnDisable()
    {
        CancelInvoke();
    }
}