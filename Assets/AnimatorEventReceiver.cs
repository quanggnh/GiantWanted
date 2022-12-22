using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimatorEventReceiver : MonoBehaviour
{

    public event System.Action HoldMagic;
    public event System.Action ShootMagic;
    public event System.Action BuildMagic;

    public void Hold()
    {
        if(HoldMagic != null) //neu co ben dang ki event
        {
            HoldMagic(); //thi thuc hien
        }
    }

    public void SpawnBullet()
    {
        if (ShootMagic != null)
        {
            ShootMagic();
        }
    }

    public void PlaySoundBulidMagic()
    {
        if (BuildMagic != null)
        {
            BuildMagic();
        }
    }
}
