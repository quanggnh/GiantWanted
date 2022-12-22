using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BaseBullet : MonoBehaviour
{
    public ParticleSystem bloodFx;
    public ParticleSystem exploreFx;

    public Rigidbody BulletRigid;
    public float DamageForce;
    public float Damage;
}
