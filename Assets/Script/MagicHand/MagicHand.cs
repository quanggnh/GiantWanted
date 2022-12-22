using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MagicHand : MonoBehaviour
{
    [SerializeField] protected Animator handAnimator;
    [SerializeField] protected GameObject magicObj;
    [SerializeField] protected GameObject magicSpawnPos;
    [SerializeField] protected ParticleSystem fireFx;
    [SerializeField] protected ParticleSystem secondFireFx;
    
    public void OnScoped()
    {
        //isCompared = true;
        handAnimator.Play("Hold");
        fireFx.gameObject.SetActive(true);
        if (secondFireFx != null)
        {
            secondFireFx.gameObject.SetActive(true);
            secondFireFx.Play();
        }
    }

    public void Shoot()
    {
        StartCoroutine(spawnMagic());
    }
    IEnumerator spawnMagic()
    {
        handAnimator.Play("Shoot");
        fireFx.gameObject.SetActive(false);
        if (secondFireFx != null)
        {
            secondFireFx.gameObject.SetActive(false);
        }
        yield return new WaitForSeconds(0.5f);
        SpawnMagicBullet();
    }
    public virtual void SpawnMagicBullet()
    {
        Instantiate(magicObj, magicSpawnPos.transform);
    }
}
