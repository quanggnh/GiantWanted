using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Luna.Unity;
using DG.Tweening;
public class IECControl : MonoBehaviour
{
    public Transform monsterbackscene;

    private Vector3 firstplace = new Vector3(23.7f,0,47.8f);
    private Vector3 secondndplace = new Vector3(-27.1f,0,47.8f);

    // Start is called before the first frame update
    void Start()
    {
        moveA();
        Luna.Unity.LifeCycle.GameStarted();
        Luna.Unity.LifeCycle.GameEnded();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0)){
            Luna.Unity.Playable.InstallFullGame();
        }
    }

    private void moveA()
    {
        monsterbackscene.DOMove(secondndplace, 1.5f).SetEase(Ease.Linear).OnComplete(() =>
        {
            moveB();
        });
    }
    private void moveB()
    {
        monsterbackscene.DOMove(firstplace, 2.2f).SetEase(Ease.Linear).OnComplete(() =>
        {
            moveA();
        });
    }
}
