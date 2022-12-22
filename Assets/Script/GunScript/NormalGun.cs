using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NormalGun : BaseGun
{
    [SerializeField] float shootForce;
    [SerializeField] GameObject x2Pref;

    public override void Fire()
    {
        base.Fire(); ;
        if (bulletObj != null)
        {
            bulletRigid = bulletObj.GetComponent<Rigidbody>();
            bulletRigid.velocity = Vector3.zero;
            bulletRigid.AddForce(main.transform.forward * shootForce, ForceMode.Impulse);
            //CheckTargetToTakeDamage();
            //SoundManager.Instance.PlayShootSoundFx(GunTypeName.Normal);
        }

    }
    //private void DoBulletEffect(BaseEnemy enemy)
    //{
    //    if (hit.rigidbody != null)
    //    {
    //        hit.rigidbody.AddForce(main.transform.forward * 400, ForceMode.VelocityChange);
    //    }

    //    enemy.CheckToTorque(hit.transform.name);

    //    float pinWeightValue = 0;

    //    pinWeightValue = enemy.PuppetMaster.pinWeight;

    //    DOTween.To(() =>
    //    {
    //        return pinWeightValue;
    //    },
    //    x =>
    //    {
    //        pinWeightValue = x;
    //        enemy.PuppetMaster.pinWeight = x;
    //    }, 0.5f, 0.3f).OnComplete(() =>
    //    {
    //        DOTween.To(() =>
    //        {
    //            return pinWeightValue;
    //        },
    //        x =>
    //        {
    //            pinWeightValue = x;
    //            enemy.PuppetMaster.pinWeight = x;
    //        }, 1f, 0.2f);
    //    });
    //}
}
