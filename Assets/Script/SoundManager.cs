using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
    // Start is called before the first frame update
    public AudioSource reloadfx;
    public AudioSource gunfx;
    public AudioSource monsterdie;
    
    public void playgunshot()
    {
        gunfx.Play();
    }

    public void playgunreload()
    {
        reloadfx.Play();
    }

    public void playgunhitted()
    {
        monsterdie.Play();
    }
}

